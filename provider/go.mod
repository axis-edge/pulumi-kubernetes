module github.com/pulumi/pulumi-kubernetes/provider/v3

go 1.16

require (
	github.com/ahmetb/go-linq v3.0.0+incompatible
	github.com/evanphx/json-patch v4.11.0+incompatible
	github.com/golang/protobuf v1.5.2
	github.com/googleapis/gnostic v0.5.1
	github.com/imdario/mergo v0.3.12
	github.com/mitchellh/mapstructure v1.4.1
	github.com/onsi/ginkgo v1.12.0 // indirect
	github.com/onsi/gomega v1.9.0 // indirect
	github.com/pkg/errors v0.9.1
	github.com/pulumi/pulumi/pkg/v3 v3.13.2
	github.com/pulumi/pulumi/sdk/v3 v3.13.2
	github.com/stretchr/testify v1.7.0
	golang.org/x/crypto v0.0.0-20210506145944-38f3c27a63bf
	google.golang.org/grpc v1.37.0
	gopkg.in/yaml.v3 v3.0.0-20200615113413-eeeca48fe776
	helm.sh/helm/v3 v3.6.3
	k8s.io/api v0.21.0
	k8s.io/apimachinery v0.21.0
	k8s.io/cli-runtime v0.21.0
	k8s.io/client-go v0.21.0
	k8s.io/kube-openapi v0.0.0-20210421082810-95288971da7e
	k8s.io/kubectl v0.21.0
	sigs.k8s.io/kustomize/api v0.8.11
	sigs.k8s.io/kustomize/kyaml v0.11.0
	sigs.k8s.io/yaml v1.2.0
)

replace (
	github.com/containerd/containerd => github.com/containerd/containerd v1.4.11 // Work around https://github.com/advisories/GHSA-c2h3-6mxw-7mvq
	github.com/docker/distribution => github.com/docker/distribution v0.0.0-20191216044856-a8371794149d
	github.com/docker/docker => github.com/moby/moby v17.12.0-ce-rc1.0.20200618181300-9dc6525e6118+incompatible
	github.com/evanphx/json-patch => github.com/evanphx/json-patch v4.11.0+incompatible
)
