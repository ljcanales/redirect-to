# redirect-to
A simple NodeJS application that redirects you to the link specified in the `redirect-links.json` file.


## Edit redirections
Edit the `redirect-links.json` file
```
{
    "example-link-1-name" : "example-link-1-url",
    "example-link-2-name" : "example-link-2-url",
    "example-link-3-name" : "example-link-3-url",
    "example-link-4-name" : "example-link-4-url",
    "example-link-5-name" : "example-link-5-url"
}
```

So that,
- `/example-link-1-name` redirects to `example-link-1-url`
- `/example-link-2-name` redirects to `example-link-2-url`
- `/example-link-3-name` redirects to `example-link-3-url`
- `/example-link-4-name` redirects to `example-link-4-url`
- `/example-link-5-name` redirects to `example-link-5-url`

Example:
```
{
    "github" : "https://github.com/ljcanales/",
    "source-code" : "https://github.com/ljcanales/redirect-to"
}
```

## Running locally
Clone repository
```
git clone https://github.com/ljcanales/redirect-to
cd redirect-to
```

Install dependencies
```
npm install
```

Start server
```
npm run start
```

By default on port 3000