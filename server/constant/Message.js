exports.Message = (name) => ({
  created: {
    created: `${name} created successfully`,
  },
  updated: {
    updated: `${name} updated successfully`,
  },
  deleted: {
    deleted: `${name} deleted successfully`,
  },
  get: {
    get: `get ${name} successfully`,
  },
});
