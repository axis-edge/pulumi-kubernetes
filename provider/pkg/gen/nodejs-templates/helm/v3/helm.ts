// Copyright 2016-2020, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// *** WARNING: this file was generated by the pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as path from "../../path";
import { getVersion } from "../../utilities";
import * as yaml from "../../yaml/index";

/**
 * Chart is a component representing a collection of resources described by an arbitrary Helm
 * Chart. The Chart can be fetched from any source that is accessible to the `helm` command
 * line. Values in the `values.yml` file can be overridden using `ChartOpts.values` (equivalent
 * to `--set` or having multiple `values.yml` files). Objects can be transformed arbitrarily by
 * supplying callbacks to `ChartOpts.transformations`.
 *
 * `Chart` does not use Tiller. The Chart specified is copied and expanded locally; the semantics
 * are equivalent to running `helm template` and then using Pulumi to manage the resulting YAML
 * manifests. Any values that would be retrieved in-cluster are assigned fake values, and
 * none of Tiller's server-side validity testing is executed.
 *
 * ## Example Usage
 * ### Local Chart Directory
 *
 * ```typescript
 * import * as k8s from "@pulumi/kubernetes";
 *
 * const nginxIngress = new k8s.helm.v3.Chart("nginx-ingress", {
 *   path: "./nginx-ingress",
 * });
 * ```
 * ### Remote Chart
 *
 * ```typescript
 * import * as k8s from "@pulumi/kubernetes";
 *
 * const nginxIngress = new k8s.helm.v3.Chart("nginx-ingress", {
 *   chart: "nginx-ingress",
 *   version: "1.24.4",
 *   fetchOpts:{
 *     repo: "https://charts.helm.sh/stable",
 *   },
 * });
 * ```
 * ### Set Chart values
 *
 * ```typescript
 * import * as k8s from "@pulumi/kubernetes";
 *
 * const nginxIngress = new k8s.helm.v3.Chart("nginx-ingress", {
 *   chart: "nginx-ingress",
 *   version: "1.24.4",
 *   fetchOpts:{
 *     repo: "https://charts.helm.sh/stable",
 *   },
 *   values: {
 *     controller: {
 *       metrics: {
 *         enabled: true,
 *       }
 *     }
 *   },
 * });
 * ```
 * ### Deploy Chart into Namespace
 *
 * ```typescript
 * import * as k8s from "@pulumi/kubernetes";
 *
 * const nginxIngress = new k8s.helm.v3.Chart("nginx-ingress", {
 *   chart: "nginx-ingress",
 *   version: "1.24.4",
 *   namespace: "test-namespace",
 *   fetchOpts:{
 *     repo: "https://charts.helm.sh/stable",
 *   },
 * });
 * ```
 * ### Chart with Transformations
 *
 * ```typescript
 * import * as k8s from "@pulumi/kubernetes";
 *
 * const nginxIngress = new k8s.helm.v3.Chart("nginx-ingress", {
 *   chart: "nginx-ingress",
 *   version: "1.24.4",
 *   fetchOpts:{
 *     repo: "https://charts.helm.sh/stable",
 *   },
 *   transformations: [
 *     // Make every service private to the cluster, i.e., turn all services into ClusterIP instead of LoadBalancer.
 *     (obj: any, opts: pulumi.CustomResourceOptions) => {
 *       if (obj.kind === "Service" && obj.apiVersion === "v1") {
 *         if (obj.spec && obj.spec.type && obj.spec.type === "LoadBalancer") {
 *           obj.spec.type = "ClusterIP";
 *         }
 *       }
 *     },
 *
 *     // Set a resource alias for a previous name.
 *     (obj: any, opts: pulumi.CustomResourceOptions) => {
 *     if (obj.kind === "Deployment") {
 *       opts.aliases = [{ name: "oldName" }]
 *     },
 *
 *     // Omit a resource from the Chart by transforming the specified resource definition to an empty List.
 *     (obj: any, opts: pulumi.CustomResourceOptions) => {
 *     if (obj.kind === "Pod" && obj.metadata.name === "test") {
 *       obj.apiVersion = "v1"
 *       obj.kind = "List"
 *     },
 *   ],
 * });
 * ```
 */
export class Chart extends yaml.CollectionComponentResource {
    /**
     * Create an instance of the specified Helm chart.
     * @param releaseName Name of the Chart (e.g., nginx-ingress).
     * @param config Configuration options for the Chart.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(
        releaseName: string,
        config: ChartOpts | LocalChartOpts,
        opts?: pulumi.ComponentResourceOptions
    ) {
        if (config.resourcePrefix !== undefined) {
            releaseName = `${config.resourcePrefix}-${releaseName}`
        }
        const aliasOpts: pulumi.ComponentResourceOptions = {...opts, aliases: [{type:"kubernetes:helm.sh/v2:Chart"}]}
        super("kubernetes:helm.sh/v3:Chart", releaseName, config, aliasOpts);

        const allConfig = pulumi.output(config);

        (<any>allConfig).isKnown.then((isKnown: boolean) => {
            if (!isKnown) {
                // Note that this can only happen during a preview.
                pulumi.log.info("[Can't preview] all chart values must be known ahead of time to generate an " +
                    "accurate preview.", this);
            }
        });

        this.resources = allConfig.apply(cfg => {
            return this.parseChart(cfg, releaseName)
        });

        this.ready = this.resources.apply(m => Object.values(m));
    }

    parseChart(config: ChartOpts | LocalChartOpts, releaseName: string) {
        const blob = {
            ...config,
            releaseName,

            toJSON() {
                let obj: any = {};
                for (const [key, value] of Object.entries(this)) {
                    if (value) {
                        switch(key) {
                            case "apiVersions": {
                                obj["api_versions"] = value;
                                break;
                            }
                            case "caFile": {
                                obj["ca_file"] = value;
                                break;
                            }
                            case "certFile": {
                                obj["cert_file"] = value;
                                break;
                            }
                            case "fetchOpts": {
                                obj["fetch_opts"] = value;
                                break;
                            }
                            case "includeTestHookResources": {
                                obj["include_test_hook_resources"] = value;
                                break;
                            }
                            case "releaseName": {
                                obj["release_name"] = value;
                                break;
                            }
                            case "resourcePrefix": {
                                obj["resource_prefix"] = value;
                                break;
                            }
                            case "untardir": {
                                obj["untar_dir"] = value;
                                break;
                            }
                            default: {
                                obj[key] = value;
                            }
                        }
                    }
                }
                return obj
            }
        }

        const jsonOpts = JSON.stringify(blob)

        // Rather than using the default provider for the following invoke call, use the version specified
        // in package.json.
        let invokeOpts: pulumi.InvokeOptions = { async: true, version: getVersion() };

        const promise = pulumi.runtime.invoke("kubernetes:helm:template", {jsonOpts}, invokeOpts);
        return pulumi.output(promise).apply<{[key: string]: pulumi.CustomResource}>(p => yaml.parse(
            {
                resourcePrefix: config.resourcePrefix,
                objs: p.result,
                transformations: config.transformations || [],
            },
            { parent: this }
        ));
    }
}

interface BaseChartOpts {
    /**
     * The optional kubernetes api versions used for Capabilities.APIVersions.
     */
    apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * By default, Helm resources with the `test`, `test-success`, and `test-failure` hooks are not installed. Set
     * this flag to true to include these resources.
     */
    includeTestHookResources?: boolean;
    /**
     * The optional namespace to install chart resources into.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Overrides for chart values.
     */
    values?: pulumi.Inputs;
    /**
     * A set of transformations to apply to Kubernetes resource definitions before registering
     * with engine.
     */
    transformations?: ((o: any, opts: pulumi.CustomResourceOptions) => void)[];
    /**
     * An optional prefix for the auto-generated resource names.
     * Example: A resource created with resourcePrefix="foo" would produce a resource named "foo-resourceName".
     */
    resourcePrefix?: string
}

/**
 * The set of arguments for constructing a Chart resource from a remote source.
 */
export interface ChartOpts extends BaseChartOpts {
    /**
     * The repository name of the chart to deploy.
     * Example: "stable"
     */
    repo?: pulumi.Input<string>;

    /**
     * The name of the chart to deploy.  If [repo] is provided, this chart name will be prefixed by the repo name.
     * Example: repo: "stable", chart: "nginx-ingress" -> "stable/nginx-ingress"
     * Example: chart: "stable/nginx-ingress" -> "stable/nginx-ingress"
     */
    chart: pulumi.Input<string>;

    /**
     * The version of the chart to deploy. If not provided, the latest version will be deployed.
     */
    version?: pulumi.Input<string>;

    /**
     * Additional options to customize the fetching of the Helm chart.
     */
    fetchOpts?: pulumi.Input<FetchOpts>;
}

function isChartOpts(o: any): o is ChartOpts {
    return "chart" in o;
}

/**
 * The set of arguments for constructing a Chart resource from a local source.
 */
export interface LocalChartOpts extends BaseChartOpts {
    /**
     * The path to the chart directory which contains the `Chart.yaml` file.
     */
    path: string;
}

function isLocalChartOpts(o: any): o is LocalChartOpts {
    return "path" in o;
}

/**
 * Additional options to customize the fetching of the Helm chart.
 */
export interface FetchOpts {
    /** Specific version of a chart. Without this, the latest version is fetched. */
    version?: pulumi.Input<string>;

    /** Verify certificates of HTTPS-enabled servers using this CA bundle. */
    caFile?: pulumi.Input<string>;

    /** Identify HTTPS client using this SSL certificate file. */
    certFile?: pulumi.Input<string>;

    /** Identify HTTPS client using this SSL key file. */
    keyFile?: pulumi.Input<string>;

    /**
     * Location to write the chart. If this and tardir are specified, tardir is appended to this
     * (default ".").
     */
    destination?: pulumi.Input<string>;

    /** Keyring containing public keys (default "/Users/alex/.gnupg/pubring.gpg"). */
    keyring?: pulumi.Input<string>;

    /** Chart repository password. */
    password?: pulumi.Input<string>;

    /** Chart repository url where to locate the requested chart. */
    repo?: pulumi.Input<string>;

    /**
     * If untar is specified, this flag specifies the name of the directory into which the chart is
     * expanded (default ".").
     */
    untardir?: pulumi.Input<string>;

    /** Chart repository username. */
    username?: pulumi.Input<string>;

    /** Location of your Helm config. Overrides $HELM_HOME (default "/Users/alex/.helm"). */
    home?: pulumi.Input<string>;

    /**
     * Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is
     * ignored.
     */
    devel?: pulumi.Input<boolean>;

    /** Fetch the provenance file, but don't perform verification. */
    prov?: pulumi.Input<boolean>;

    /** If set to false, will leave the chart as a tarball after downloading. */
    untar?: pulumi.Input<boolean>;

    /** Verify the package against its signature. */
    verify?: pulumi.Input<boolean>;
}
