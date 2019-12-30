# Poetry Install Action

This javascript action installs poetry and then uses it to install package dependencies
for projects that use poetry.

## Inputs

### `create-virtualenv`

**Optional** Whether or not poetry creates a project-specific virtualenv on `poetry install`. Default `"false"`.


## Example usage

```yaml
...
- uses: actions/setup-python@v1
- uses: knowsuchagency/poetry-install@v1
  with:
    create-virtualenv: 'true'
```