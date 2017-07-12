// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class NetworkInterfaceAttachment extends lumi.NamedResource implements NetworkInterfaceAttachmentArgs {
    public readonly attachmentId?: string;
    public readonly deviceIndex: number;
    public readonly instanceId: string;
    public readonly networkInterfaceId: string;
    public readonly status?: string;

    constructor(name: string, args: NetworkInterfaceAttachmentArgs) {
        super(name);
        this.attachmentId = args.attachmentId;
        this.deviceIndex = args.deviceIndex;
        this.instanceId = args.instanceId;
        this.networkInterfaceId = args.networkInterfaceId;
        this.status = args.status;
    }
}

export interface NetworkInterfaceAttachmentArgs {
    readonly attachmentId?: string;
    readonly deviceIndex: number;
    readonly instanceId: string;
    readonly networkInterfaceId: string;
    readonly status?: string;
}
