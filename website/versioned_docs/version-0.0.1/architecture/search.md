---
id: version-0.0.1-search
title: Search
original_id: search
---

There are two search mechanisms available in DrikGallery.

The default is to use PostgreSQL. This is a fairly versatile solution that does not require any additional resources.

A more sophisticated search backend can be enabled if an Elasticsearch server is available. Elasticsearch offers a lot of advanced features, such as boosting to tune the relevance of a query or “more like this” queries. See the [official Elasticsearch website](https://www.elastic.co/products/elasticsearch) to read more about its features. Please note that enabling the Elasticsearch backend does not currently enable any additional features in DrikGallery.

For installation and configuration instructions see [Elasticsearch](/mw-docs/docs/integrations/elasticsearch).