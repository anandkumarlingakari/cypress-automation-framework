const fs = require('fs');

it('downloads file using cy.request()', () => {
  const url = 'https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt';
  const dest = 'cypress/downloads/sample.txt';

  cy.request({
    url,
    encoding: 'binary'
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.writeFile(dest, response.body, 'binary');
  });
});