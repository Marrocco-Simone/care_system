const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const {
  default: PublisherGithub,
} = require("@electron-forge/publisher-github");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "Marrocco-Simone",
          name: "Judo-in-Cloud-CARE-System",
        },
        draft: true,
        releaseName: "v${version} Judo in Cloud - CARE System", // Automatically generate release name
      },
    },
  ],
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "judo_in_cloud_care_system",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        name: "judo_in_cloud_care_system",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        name: "judo_in_cloud_care_system",
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        name: "judo_in_cloud_care_system",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
