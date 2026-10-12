# Poetry Install Action

This javascript action installs [poetry] and then invokes it to install project dependencies.

## Example usage

```yaml
...
- uses: actions/checkout@v7
- uses: actions/setup-python@v7
- uses: knowsuchagency/poetry-install@v3
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

is a more succinct

```yaml
...
- uses: actions/checkout@v7
- uses: actions/setup-python@v7
- run: |
    pip install -U pip
    pip install poetry
    poetry install
  env:
    POETRY_VIRTUALENVS_CREATE: false
```

[poetry]: https://python-poetry.org