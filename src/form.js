export const form = {
    name: "SDK example form",
    clusters: [
      {
        id:
          "bffa7c16cbbf96f2e0963841a437191ac35bed66e05ab4e8f9824de881c4cc4b",
        nodes: [
          {
            id:
              "9ef64ab160ef6096ceecb4561f3eecc37007b669337929393a9d3789fa744f3e",
            explanation: "This example does not store any data.",
            name:
              "👋 Hi @e14599867b9fd518459e7ecaf974d33f84f2c3b322f644e838f948c2136eec3a",
            nameVisible: true,
            placeholder: "Enter your name here",
            description:
              "Welcome to the Tripetto SDK. This is a simple example form.",
            slots: [
              {
                id:
                  "e14599867b9fd518459e7ecaf974d33f84f2c3b322f644e838f948c2136eec3a",
                type: "text",
                kind: "static",
                reference: "value",
                label: "Text",
                alias: "NAME"
              }
            ],
            block: { type: "tripetto-block-text", version: "5.0.3" }
          }
        ]
      }
    ],
    builder: { name: "tripetto", version: "4.4.2" }
  }