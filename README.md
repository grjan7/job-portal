# job-portal

> Job portal with filter options for skillsets and countries.

## Technology Used
### Backend

Node.js v16.17.0, Express.js
DB: MongoDB

#### Endpoints

> **GET /**

- serves static files

> **GET /jobs?[countries=countries][&skillsets=skillsets][&page=page][&jobsperpage=jobsperpage]**

- serves jobs data to requests with/without queries
- maximum document served is based on jobsperpage
- used MongoDB aggregation pipeline to filter data

**Jobs**

```JSON
[{
  "_id": "<ObjectId>",
  "id": "<string>",
  "title": "<string>"
  "description": "<string>",
  "countries": "array<string>",
  "skillsets": "array<string>",
  "organization": {
    "name": "<string>",
    "logo": "<string>"
  }
}]

```

> **GET /jobs/:id**

- serves job data based on id
- used MQL to filter data

**Job**

```JSON
{
  "_id": "<ObjectId>",
  "id": "<string>",
  "title": "<string>"
  "description": "<string>",
  "countries": "array<string>",
  "skillsets": "array<string>",
  "organization": {
    "name": "<string>",
    "logo": "<string>"
  }
}
```

### Frontend

HTML5, CSS3, JavaScript

**Features**
- filter panel
- joblist panel
- ad panel

### Snapshots

#### Default Load of Jobs

![Unfiltered](/snapshots/unfiltered.png)

#### Filtered By Country
![country filter](/snapshots/country-filter.png)

#### Filtered By Countries

![multiple countries filter](/snapshots/countries-filter.png)

#### Filtered By Countries and Skillsets

![countries and skillsets filter](/snapshots/countries-skillsets-filter.png)