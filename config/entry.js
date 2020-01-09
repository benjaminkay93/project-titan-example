import React from 'react';
import { PageContent } from '@titan/page-content';
import { DocumentStateProvider, useDocumentState } from '@titan/state';
import DocumentMeta from '@titan/document-meta';
import { pageReducer } from '@titan/document-state';

const DocumentMetaWrapper = () => {
  const [
    {
      page: { title, description }
    }
  ] = useDocumentState();
  return <DocumentMeta title={title} description={description} />;
};

const Entry = ({ data, params }) => {
  return (
    <DocumentStateProvider initialState={pageReducer.initialState} reducers={pageReducer.reducer}>
      <DocumentMetaWrapper />
      <PageContent pageComposition={data} params={params} />
    </DocumentStateProvider>
  );
};

export default Entry;
