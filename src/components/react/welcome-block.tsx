import { tripetto, NodeBlock } from "tripetto-runner-foundation";
import { namespace, IAutoscrollRenderProps, IAutoscrollRendering } from "tripetto-runner-autoscroll";
import { ReactNode } from "react";

@tripetto({
    type: "node",

    // Feed the namespace of the stock runner here.
    // This is important!
    namespace,

    // This is the unique identifier for your block
    identifier: "welcome-block",
})
export class WelcomeBlock extends NodeBlock implements IAutoscrollRendering {
    // This render function is invoked when your block renders in the runner UI.
    render(props: IAutoscrollRenderProps): ReactNode {
        return (
            <>
                Welcome to your custom block!
            </>
        );
    }
}