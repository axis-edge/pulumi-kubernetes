// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v1

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-kubernetes/sdk/v3/go/kubernetes"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "kubernetes:apps/v1:ControllerRevision":
		r = &ControllerRevision{}
	case "kubernetes:apps/v1:ControllerRevisionList":
		r = &ControllerRevisionList{}
	case "kubernetes:apps/v1:DaemonSet":
		r = &DaemonSet{}
	case "kubernetes:apps/v1:DaemonSetList":
		r = &DaemonSetList{}
	case "kubernetes:apps/v1:Deployment":
		r = &Deployment{}
	case "kubernetes:apps/v1:DeploymentList":
		r = &DeploymentList{}
	case "kubernetes:apps/v1:ReplicaSet":
		r = &ReplicaSet{}
	case "kubernetes:apps/v1:ReplicaSetList":
		r = &ReplicaSetList{}
	case "kubernetes:apps/v1:StatefulSet":
		r = &StatefulSet{}
	case "kubernetes:apps/v1:StatefulSetList":
		r = &StatefulSetList{}
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	err = ctx.RegisterResource(typ, name, nil, r, pulumi.URN_(urn))
	return
}

func init() {
	version, err := kubernetes.PkgVersion()
	if err != nil {
		fmt.Println("failed to determine package version. defaulting to v1: %v", err)
	}
	pulumi.RegisterResourceModule(
		"kubernetes",
		"apps/v1",
		&module{version},
	)
}
