const {isEmpty, filter, sortJsonArray} =  require('./helpers');
const csv = require('csvtojson');
const csvFilePath = __dirname + '/../data/organization_sample_data.csv';

/**
 * Get a list of all of the organizations.  The list could be filtered / sorted
 * depending on the query parameters passed to the endpoint.
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
async function getOrganizations(req, res) {
  const queryParams = req.query;
  const organizationsArray = await csv().fromFile(csvFilePath);
  let matchedOrganizations = [];
  let orderByParam = '';
  let orderByDirectionParam = '';

  try {
    if (!isEmpty(queryParams)) {
      // Get the 'order by' conditions out of the query params and stuff them into localized variables
      // so that we can delete them from the JSON object that will be used for filtering out
      // the data we want in this fetch.
      orderByParam = ('orderby' in queryParams) ? queryParams['orderby'] : '';
      orderByDirectionParam = ('direction' in queryParams) ? (queryParams['direction']).toLowerCase() : '';
      delete(queryParams['orderby']);
      delete(queryParams['direction']);

      matchedOrganizations = await filter(organizationsArray, queryParams);

      // Only checking to see if the orderBy is set.  If it is, then we will do the orderBy.  If no direction
      // is set, we will fallback to 'ASC' order.
      if (orderByParam) {
        sortJsonArray(matchedOrganizations, orderByParam, orderByDirectionParam);
      }
    } else {
      matchedOrganizations = organizationsArray;
    }

    return res.status(200).send({
      status: "success",
      data: { organizations: matchedOrganizations }
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "There was an error fetching the organizations with your given parameters.",
      data: error
    });
  }
}

module.exports = {
  getOrganizations
};
