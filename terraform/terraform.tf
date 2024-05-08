# PROVIDER
provider "google" {
  project     = var.project
  region      = var.location
}

# RESSOURCE
resource "google_cloud_run_v2_service" "default" {
  name     = "cloudrun-${var.image_name}"
  location = var.location
  ingress = "INGRESS_TRAFFIC_ALL"
  project = var.project

  template {
    scaling {
      max_instance_count = 1
    }

    containers {
      ports {
        container_port = var.port
      }
      image = "eu.gcr.io/${var.project}/${var.image_name}:${var.image_tag}"
    }
  }

  traffic {
    type = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }
}

resource "google_artifact_registry_repository" "my-reg-repo" {
  location      = var.location
  repository_id = var.image_name
  description   = "${var.image_name} registry repository"
  format        = "DOCKER"
}

# RESSOURCE IAM
resource "google_cloud_run_v2_service_iam_member" "member" {
  project = google_cloud_run_v2_service.default.project
  location = google_cloud_run_v2_service.default.location
  name = google_cloud_run_v2_service.default.name
  member = "allUsers"
  role = "roles/run.invoker"
}

resource "google_artifact_registry_repository_iam_member" "member" {
  project = google_artifact_registry_repository.my-reg-repo.project
  location = google_artifact_registry_repository.my-reg-repo.location
  repository = google_artifact_registry_repository.my-reg-repo.name
  member = "allUsers"
  role = "roles/artifactregistry.admin"
}