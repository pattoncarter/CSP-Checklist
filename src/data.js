const securityThemes = [
    {
      id: "networkSecurity",
      title: "Network Security",
      description: "Measures to protect the network perimeter and ensure proper segmentation within your cloud environment.",
      policies: [
        { name: "AWS Well Architected", guideline: "VPC configuration, subnets, and security groups best practices" },
        { name: "NIST 800-53", guideline: "AC-4 & SC-7 for network boundary protection" },
        { name: "CCM", guideline: "Network segmentation controls" },
        { name: "MCSB", guideline: "Firewall and IDS/IPS recommendations" }
      ],
      recommendedActions: [
        "Configure your VPC with proper segmentation",
        "Implement firewall rules and intrusion detection systems",
        "Continuously monitor network traffic"
      ]
    },
    {
      id: "iam",
      title: "Identity and Access Management",
      description: "Controlling and managing user and service access to cloud resources.",
      policies: [
        { name: "AWS Well Architected", guideline: "Use of IAM roles and policies" },
        { name: "NIST 800-53", guideline: "AC-2 & IA-5 for authentication and authorization" },
        { name: "CCM", guideline: "Identity federation and SSO best practices" },
        { name: "MCSB", guideline: "Multi-factor authentication recommendations" }
      ],
      recommendedActions: [
        "Implement role‑based access control (RBAC)",
        "Enforce multi‑factor authentication (MFA)",
        "Regularly review and update permissions"
      ]
    },
    {
      id: "dataProtection",
      title: "Data Protection",
      description: "Ensuring that data is secure in transit and at rest.",
      policies: [
        { name: "AWS Well Architected", guideline: "Data encryption in transit and at rest" },
        { name: "NIST 800-53", guideline: "SC-13 & SC-28 for encryption" },
        { name: "CCM", guideline: "Data loss prevention and encryption controls" },
        { name: "MCSB", guideline: "Secure data storage practices" }
      ],
      recommendedActions: [
        "Encrypt sensitive data both in transit and at rest",
        "Implement data loss prevention (DLP) strategies",
        "Perform regular secure backups"
      ]
    },
    // Add more themes as needed…
  ];
  
  export default securityThemes;
  