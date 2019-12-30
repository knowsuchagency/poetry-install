# Poetry Install Action

This javascript action installs poetry and then uses it to install package dependencies
for projects that use poetry.

## Example usage

```yaml
...
- uses: actions/setup-python@v1
- uses: actions/checkout@v1
- uses: knowsuchagency/poetry-install@master
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

is equivalent to

```yaml
- uses: actions/setup-python@v1
- uses: actions/checkout@v1
- run: |
    pip install -U pip
    pip install poetry
    poetry install
  env:
    POETRY_VIRTUALENVS_CREATE: false
```