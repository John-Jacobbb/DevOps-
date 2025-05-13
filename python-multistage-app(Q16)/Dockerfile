# -------- Stage 1: Build Stage --------
FROM python:3.12-slim AS build-stage

WORKDIR /app
COPY requirements.txt .

# Install dependencies into a temporary folder
RUN pip install --upgrade pip \
    && pip install --prefix=/install -r requirements.txt

COPY . .

# -------- Stage 2: Production --------
FROM python:3.12-alpine AS production-stage

WORKDIR /app

# Copy installed Python packages from build stage
COPY --from=build-stage /install /usr/local
COPY --from=build-stage /app /app

CMD ["python", "app.py"]
