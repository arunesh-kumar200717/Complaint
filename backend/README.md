# Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arunesh-kumar200717/Complaint.git
   cd Complaint
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Environment Variables**:
   Ensure you have a `.env` file in the root directory with the following:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

5. **Access the API**:
   Open a browser and navigate to `http://localhost:3000/api` to explore the API documentation.


# API Endpoints Documentation

## Base URL
- `http://localhost:3000/api`

## Endpoints

### 1. Get all complaints
- **URL**: `/complaints`
- **Method**: `GET`
- **Description**: Retrieve a list of all complaints.
- **Response**: JSON array of complaints.

### 2. Create a new complaint
- **URL**: `/complaints`
- **Method**: `POST`
- **Description**: Create a new complaint.
- **Body**: JSON object containing complaint details.
- **Response**: The created complaint object.

### 3. Update a complaint
- **URL**: `/complaints/:id`
- **Method**: `PUT`
- **Description**: Update a complaint by its ID.
- **Body**: JSON object containing new complaint details.
- **Response**: The updated complaint object.

### 4. Delete a complaint
- **URL**: `/complaints/:id`
- **Method**: `DELETE`
- **Description**: Delete a complaint by its ID.
- **Response**: Success message or deleted complaint object.

### 5. Get a complaint by ID
- **URL**: `/complaints/:id`
- **Method**: `GET`
- **Description**: Retrieve a single complaint by its ID.
- **Response**: The complaint object.
