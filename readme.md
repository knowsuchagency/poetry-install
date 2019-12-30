# Poetry Install Action

This javascript action installs poetry and then uses it to install package dependencies
for projects that use poetry.

## Example usage

```yaml
...
- uses: actions/checkout@v1
- uses: actions/setup-python@v1
- uses: knowsuchagency/poetry-install@master
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

is a more succinct

```yaml
...
- uses: actions/checkout@v1
- uses: actions/setup-python@v1
- run: |
    pip install -U pip
    pip install poetry
    poetry install
  env:
    POETRY_VIRTUALENVS_CREATE: false
```