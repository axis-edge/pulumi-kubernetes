// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Discovery.V1
{

    /// <summary>
    /// EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
    /// </summary>
    [OutputType]
    public sealed class EndpointSlice
    {
        /// <summary>
        /// addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
        /// 
        /// Possible enum values:
        ///  - `"FQDN"` represents a FQDN.
        ///  - `"IPv4"` represents an IPv4 Address.
        ///  - `"IPv6"` represents an IPv6 Address.
        /// </summary>
        public readonly string AddressType;
        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        public readonly string ApiVersion;
        /// <summary>
        /// endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
        /// </summary>
        public readonly ImmutableArray<Pulumi.Kubernetes.Types.Outputs.Discovery.V1.Endpoint> Endpoints;
        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Standard object's metadata.
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Meta.V1.ObjectMeta Metadata;
        /// <summary>
        /// ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
        /// </summary>
        public readonly ImmutableArray<Pulumi.Kubernetes.Types.Outputs.Discovery.V1.EndpointPort> Ports;

        [OutputConstructor]
        private EndpointSlice(
            string addressType,

            string apiVersion,

            ImmutableArray<Pulumi.Kubernetes.Types.Outputs.Discovery.V1.Endpoint> endpoints,

            string kind,

            Pulumi.Kubernetes.Types.Outputs.Meta.V1.ObjectMeta metadata,

            ImmutableArray<Pulumi.Kubernetes.Types.Outputs.Discovery.V1.EndpointPort> ports)
        {
            AddressType = addressType;
            ApiVersion = apiVersion;
            Endpoints = endpoints;
            Kind = kind;
            Metadata = metadata;
            Ports = ports;
        }
    }
}
