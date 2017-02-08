# How to
- Create `configs/crm-config.json` file with the following content.

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
`node test-runner.js --task=reference --configPath=./scenarios/search-actions.json`

`node test-runner.js --task=test --configPath=./scenarios/search-actions.json`
