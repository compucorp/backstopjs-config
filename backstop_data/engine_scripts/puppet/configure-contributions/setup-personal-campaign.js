'use strict';

module.exports = async (engine, scenario, viewPort) => {
  await require('./personal-campaign-pages')(engine, scenario, viewPort);

  const title = await engine.evaluate(el => el.innerHTML, await engine.$('.crm-contribution-contributionpage-pcp-form-block-link_text span.description em'));
  await engine.goto(title);
}
