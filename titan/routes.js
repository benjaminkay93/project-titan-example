const routes = async () => {
  return [
    {
      path: '/hello-world',
      pageContent: {
          header: [],
          main: [
            {
              containers: [
                {
                  name: 'hello-world',
                  importance: 'PRIMARY',
                  hasFetcher: true
                }
              ]
            }
          ],
          footer: []
        }
    }
  ]
};

export default routes;
