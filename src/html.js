/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />

        {headComponents}

      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
