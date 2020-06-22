// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Inputs.Extensions.V1Beta1
{

    /// <summary>
    /// DeploymentSpec is the specification of the desired behavior of the Deployment.
    /// </summary>
    public class DeploymentSpecArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
        /// </summary>
        [Input("minReadySeconds")]
        public Input<int>? MinReadySeconds { get; set; }

        /// <summary>
        /// Indicates that the deployment is paused and will not be processed by the deployment controller.
        /// </summary>
        [Input("paused")]
        public Input<bool>? Paused { get; set; }

        /// <summary>
        /// The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means "no deadline".
        /// </summary>
        [Input("progressDeadlineSeconds")]
        public Input<int>? ProgressDeadlineSeconds { get; set; }

        /// <summary>
        /// Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
        /// </summary>
        [Input("replicas")]
        public Input<int>? Replicas { get; set; }

        /// <summary>
        /// The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means "retaining all old RelicaSets".
        /// </summary>
        [Input("revisionHistoryLimit")]
        public Input<int>? RevisionHistoryLimit { get; set; }

        /// <summary>
        /// DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
        /// </summary>
        [Input("rollbackTo")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Extensions.V1Beta1.RollbackConfigArgs>? RollbackTo { get; set; }

        /// <summary>
        /// Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
        /// </summary>
        [Input("selector")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Meta.V1.LabelSelectorArgs>? Selector { get; set; }

        /// <summary>
        /// The deployment strategy to use to replace existing pods with new ones.
        /// </summary>
        [Input("strategy")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Extensions.V1Beta1.DeploymentStrategyArgs>? Strategy { get; set; }

        /// <summary>
        /// Template describes the pods that will be created.
        /// </summary>
        [Input("template", required: true)]
        public Input<Pulumi.Kubernetes.Types.Inputs.Core.V1.PodTemplateSpecArgs> Template { get; set; } = null!;

        public DeploymentSpecArgs()
        {
        }
    }
}