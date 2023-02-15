const { dconf_json } = require('./to_json');

test('dconf_json should correctly parse a dconf file', () => {
    const input =
        `[org/gnome/terminal/legacy/profiles:]
list=['b1dcc9dd-5262-4d8d-a863-c897e6d979b9', '571efbab-07ca-48f2-970a-9d6f2c1e413e']
default='571efbab-07ca-48f2-970a-9d6f2c1e413e'

[org/gnome/terminal/legacy/profiles:/:b1dcc9dd-5262-4d8d-a863-c897e6d979b9]
background-color='rgb(0,0,0)'
background-transparency-percent=9
palette=['rgb(46,52,54)', 'rgb(204,0,0)', 'rgb(78,154,6)', 'rgb(196,160,0)', 'rgb(52,101,164)', 'rgb(117,80,123)', 'rgb(6,152,154)', 'rgb(211,215,207)', 'rgb(85,87,83)', 'rgb(239,41,41)', 'rgb(138,226,52)', 'rgb(252,233,79)', 'rgb(114,159,207)', 'rgb(173,127,168)', 'rgb(52,226,226)', 'rgb(238,238,236)']
use-theme-transparency=true
foreground-color='rgb(0,255,0)'
use-transparent-background=true
use-theme-colors=true

[org/gnome/terminal/legacy/profiles:/:571efbab-07ca-48f2-970a-9d6f2c1e413e]
foreground-color='rgb(239,239,227)'
visible-name='1987'
palette=['rgb(30,30,30)', 'rgb(179,41,41)', 'rgb(99,194,125)', 'rgb(199,196,127)', 'rgb(7,64,96)', 'rgb(189,126,174)', 'rgb(107,158,163)', 'rgb(169,169,143)', 'rgb(111,111,111)', 'rgb(255,86,86)', 'rgb(170,247,191)', 'rgb(255,252,175)', 'rgb(137,221,255)', 'rgb(249,167,230)', 'rgb(145,219,226)', 'rgb(239,239,227)']
cursor-background-color='rgb(239,239,227)'
cursor-colors-set=false
highlight-colors-set=false
use-theme-colors=false
cursor-foreground-color='rgb(239,239,227)'
bold-color-same-as-fg=true
bold-color='rgb(137,221,255)'
background-color='rgb(64,60,66)'
`;

    const expected = {
        "org": {
            "gnome": {
                "terminal": {
                    "legacy": {
                        "profiles: ": {
                            "list": "['b1dcc9dd-5262-4d8d-a863-c897e6d979b9', '571efbab-07ca-48f2-970a-9d6f2c1e413e']",
                            "default": "'571efbab-07ca-48f2-970a-9d6f2c1e413e'"
                        },
                        "profiles:": {
                            ":b1dcc9dd-5262-4d8d-a863-c897e6d979b9 ": {
                                "background-color": "'rgb(0,0,0)'",
                                "background-transparency-percent": "9",
                                "palette": "['rgb(46,52,54)', 'rgb(204,0,0)', 'rgb(78,154,6)', 'rgb(196,160,0)', 'rgb(52,101,164)', 'rgb(117,80,123)', 'rgb(6,152,154)', 'rgb(211,215,207)', 'rgb(85,87,83)', 'rgb(239,41,41)', 'rgb(138,226,52)', 'rgb(252,233,79)', 'rgb(114,159,207)', 'rgb(173,127,168)', 'rgb(52,226,226)', 'rgb(238,238,236)']",
                                "use-theme-transparency": "true",
                                "foreground-color": "'rgb(0,255,0)'",
                                "use-transparent-background": "true",
                                "use-theme-colors": "true"
                            },
                            ":571efbab-07ca-48f2-970a-9d6f2c1e413e ": {
                                "foreground-color": "'rgb(239,239,227)'",
                                "visible-name": "'1987'",
                                "palette": "['rgb(30,30,30)', 'rgb(179,41,41)', 'rgb(99,194,125)', 'rgb(199,196,127)', 'rgb(7,64,96)', 'rgb(189,126,174)', 'rgb(107,158,163)', 'rgb(169,169,143)', 'rgb(111,111,111)', 'rgb(255,86,86)', 'rgb(170,247,191)', 'rgb(255,252,175)', 'rgb(137,221,255)', 'rgb(249,167,230)', 'rgb(145,219,226)', 'rgb(239,239,227)']",
                                "cursor-background-color": "'rgb(239,239,227)'",
                                "cursor-colors-set": "false",
                                "highlight-colors-set": "false",
                                "use-theme-colors": "false",
                                "cursor-foreground-color": "'rgb(239,239,227)'",
                                "bold-color-same-as-fg": "true",
                                "bold-color": "'rgb(137,221,255)'",
                                "background-color": "'rgb(64,60,66)'"
                            }
                        }
                    }
                },
            }
        }
    }

    expect(dconf_json(input)).toEqual(expected);
});
