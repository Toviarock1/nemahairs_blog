import client from '@sanity/client';

export default client({
    projectId: "7k0zkofm",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-11-03"
});