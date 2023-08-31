

## Usage:
Install the plugin and use it like in this example:

```yaml
title: My Card
type: entities
entities:
  - entity: switch.intercom
    icon: pg:intercom
```

### Systemwide availability (Optional)
The steps above will make the icons available, but limited to the Lovelace UI only. If you want the icons to be available throughout Home Assistant, add the following to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/hass-pg-icons/hass-pg-icons.js
```

For this step, a system restart is needed.
