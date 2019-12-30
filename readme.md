# Poetry Install Action

This javascript action installs poetry and then uses it to install package dependencies
for projects that use poetry.

## Example usage

```yaml
...
- uses: actions/setup-python@v1
- uses: actions/checkout@v1
- uses: knowsuchagency/poetry-install@v1
  env:
    POETRY_VIRTUALENVS_CREATE: false
```