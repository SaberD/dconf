# Dconf Json

Convert linux gnome config to json and back  
To get the gnome .conf file use:

```bash
dconf dump / > FILENAME.conf
```

Example usage to convert conf and store as json file and take json and store as conf file

## Without using files
To get the dconf out as json without using files:
```js
const { execSync } = require('child_process');
const dconfjson = require('dconf-json');

const spath = "/org/gnome/terminal/legacy/profiles:/";
const cmd = `dconf dump ${spath}`;
const s_out = execSync(cmd).toString('utf-8');
const config_json = dconfjson.dconf_json(s_out);
```
