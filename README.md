# AI Content Idea Generator (Node.js Backend)

A simple Express server that provides a mock `/api/generate-ideas` endpoint.

## Prerequisites

* Node.js (v14+)
* npm

## Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/ai-idea-generator-backend.git
   cd ai-idea-generator-backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. (Optional) Install nodemon for development:

   ```bash
   npm install --save-dev nodemon
   ```

## Configuration

* The server listens on port `3000` by default.
* To change the port, set the `PORT` environment variable.

## Running the Server

* **Production**:

  ```bash
  npm start
  ```
* **Development** (with auto-reload):

  ```bash
  npm run dev
  ```

## API Endpoint

### `POST /api/generate-ideas`

* **Request**:

  * **URL**: `http://<HOST>:<PORT>/api/generate-ideas`
  * **Headers**: `Content-Type: application/json`
  * **Body**:

    ```json
    { "topic": "Your topic here" }
    ```

* **Response**:

  * `200 OK`
  * JSON array of strings, e.g.:

    ```json
    [
      "10 Morning Habits to Boost Your Productivity",
      "The Best Apps for Managing Your Productivity",
      "How to Use the Technique for Productivity",
      "Avoiding Burnout While Staying Productive"
    ]
    ```

## CORS

CORS is enabled via the `cors` package. You can adjust origin settings in `index.js` if needed.

## Example

```bash
curl -X POST http://localhost:3000/api/generate-ideas \
  -H "Content-Type: application/json" \
  -d '{"topic":"Productivity"}'
```

## Troubleshooting

* **Port in use**: Change `PORT` or stop the conflicting service.
* **CORS errors**: Verify `app.use(cors())` is present before your routes.

---

Paste this into your backend `README.md` for quick reference.
