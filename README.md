[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)

# hass-pg-icons

Custom icon pack designed for Home Assistant.

## Generic content

![Preview](./svg/intercom-a.svg) intercom-a<br />
![Preview](./svg/intercom-a-off.svg) intercom-a-off<br />
![Preview](./svg/intercom-b.svg) intercom-b<br />
![Preview](./svg/intercom-b-off.svg) intercom-b-off<br />
![Preview](./svg/convector-on.svg) convector<br />
![Preview](./svg/convector-disabled.svg) convector-disabled<br />
![Preview](./svg/convector-off.svg) convector-off<br />
![Preview](./svg/floor-lamp-on.svg) floor-lamp-on<br />
![Preview](./svg/floor-lamp-off.svg) floor-lamp-off<br />
![Preview](./svg/working-table-on.svg) working-table-on<br />
![Preview](./svg/working-table-off.svg) working-table-off<br />
![Preview](./svg/wall-lamp.svg) wall-lamp<br />
![Preview](./svg/wall-lamp-vertical.svg) wall-lamp-vertical<br />
![Preview](./svg/BYN.svg) currency-byn<br />

## Install

### HACS
Add this repo via HACS as a plugin and install.  See the [HACS install guide](./HACS_INSTALL.md) for step by step instructions.

### Manual
Copy the `hass-pg-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-pg-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-pg-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `pg:`.

Example:

```
entities:
  - entity: switch.intercom
    icon: 'pg:intercom'
    name: intercom
show_header_toggle: false
title: hass-pg-icons
type: entities
```

## Thanks
Thanks to @hulkhaugen, as I used his hass-fontawesome as a template for this pack
