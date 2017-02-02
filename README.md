# How to
- Create `backstop_data/crm-config.json` file with the following content.

```
{
  "url": "your_local_url",
  "credentials": {
    "name": "local_username",
    "pass": "local_password"
  }
}
```

- Run a specific config file.
`node test-runner.js --task=reference --configPath=./configs/search-actions.json`

`node test-runner.js --task=test --configPath=./configs/search-actions.json`
