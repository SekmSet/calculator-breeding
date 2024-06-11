# PROVIDER
provider "aws" {
  region     = var.location
  access_key = var.access_key
  secret_key = var.secret_key
}

## APP CONFIG
#resource "aws_appconfig_application" "create-new-app" {
#  name        = var.project
#  description = "Site internet pour calculer la durée de gestation chez le chien & le chat. Avec indication des dates clés et génération d'un fichier PDF"
#}

# BUCKET S3
resource "aws_s3_bucket" "bucket-s3-app-breed-calc" {
  bucket = var.project
}

# RESSOURCE IAM
#resource "google_cloud_run_v2_service_iam_member" "member" {
#  project = google_cloud_run_v2_service.default.project
#  location = google_cloud_run_v2_service.default.location
#  name = google_cloud_run_v2_service.default.name
#  member = "allUsers"
#  role = "roles/run.invoker"
#}

#resource "google_artifact_registry_repository_iam_member" "member" {
#  project = google_artifact_registry_repository.my-reg-repo.project
#  location = google_artifact_registry_repository.my-reg-repo.location
#  repository = google_artifact_registry_repository.my-reg-repo.name
#  member = "allUsers"
#  role = "roles/artifactregistry.admin"
#}