# Poetry Install Action

This javascript action installs [poetry](poetry) and then invokes it to install project dependencies.

## Example usage

```yaml
...
- uses: actions/checkout@v2
- uses: actions/setup-python@v2
- uses: knowsuchagency/poetry-install@v2
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

is a more succinct

```yaml
...
- uses: actions/checkout@v2
- uses: actions/setup-python@v2
- run: |
    pip install -U pip
    pip install poetry
    poetry install
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

[poetry]: https://python-poetry.org