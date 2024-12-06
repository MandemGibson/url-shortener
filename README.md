---

# URL Shortener

A simple URL shortener backend built with Node.js, Express, and MongoDB. This project provides an API to shorten long URLs and manage access counts for each short URL.

## Features
- **Create short URLs** from long URLs.
- **Retrieve original URLs** using the short code.
- **Update** and **delete** short URLs.
- **Track access counts** for each short URL.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (preferably a local setup or a remote MongoDB URI)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. **Set up the environment**:
   - Create a `.env` file in the root directory with the following content:
     ```
     MONGO_URI=<your_mongo_database_uri>
     PORT=3000
     ```

3. **Install dependencies**:
   ```bash
   cd server
   npm install
   ```

### Running the Server
```bash
npm run dev
```

This will start the server on `http://localhost:3000`.

## Usage

### API Endpoints

- **Create a short URL**:
  ```
  POST /api/v1/urls/shorten
  ```
  - Body: `{"url": "https://example.com"}`
  - Response: `{ shortCode: "abc123" }`

- **Get original URL from short code**:
  ```
  GET /api/v1/urls/shorten/:shortCode
  ```
  - Response: `{ url: "https://example.com", accessCount: 5 }`

- **Update a short URL**:
  ```
  PUT /api/v1/urls/shorten/:shortCode
  ```
  - Body: `{"url": "https://newexample.com"}`
  - Response: `{ shortCode: "abc123", url: "https://newexample.com" }`

- **Delete a short URL**:
  ```
  DELETE /api/v1/urls/shorten/:shortCode
  ```
  - Response: `{"message": "Short URL deleted successfully"}`

## Development

To run the development server, use the following command:

```bash
npm run dev
```

### Notes:
- Ensure the `MONGO_URI` in the `.env` file is set to the correct MongoDB database URL.
- For production, consider using environment variables to keep sensitive information like database URLs secure.

### Project URL (Roadmap.sh Reference)
```
https://roadmap.sh/projects/url-shortening-service
```
