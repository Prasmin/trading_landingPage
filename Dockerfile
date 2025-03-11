# base image
FROM node:18-alpine

WORKDIR /app

# Step 4: Copy only package.json and package-lock.json first to take advantage of Docker caching
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

# Step 5: Install dependencies using npm ci (clean install), skipping dev dependencies for production builds
RUN npm ci --omit=dev

# Step 6: Copy the rest of the application code into the container
COPY . .

# Step 7: Expose the port that the app will run on
EXPOSE 3000

# Step 8: Set the command to run the application (use 'npm start' for starting your app)
CMD ["nodemon", "page.js"]
