# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## Deploy notes

The studio for this project has been deployed to https://fieldnet.sanity.studio

Add the following `deployment` config in `sanity.cli.ts` so the CLI does not prompt for an appId on future deploys:

```ts
deployment: {
	appId: 'z62gsu3rnh97ldmpj7owtqql',
	autoUpdates: true,
}
```

To deploy manually:

```powershell
cd sanity-studio
sanity deploy
```

For CI, create a `SANITY_AUTH_TOKEN` secret and use `npx sanity deploy --no-open --yes`.
