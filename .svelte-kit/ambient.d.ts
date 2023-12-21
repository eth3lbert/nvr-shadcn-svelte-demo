
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const npm_package_scripts_generate_types: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_package_devDependencies__types_node: string;
	export const LESS: string;
	export const XPC_FLAGS: string;
	export const LESSCHARSET: string;
	export const npm_package_repository_url: string;
	export const ZSH_CACHE_DIR: string;
	export const HTTPIE_CONFIG_DIR: string;
	export const npm_package_exports___hooks_import: string;
	export const FORGIT_INSTALL_DIR: string;
	export const FPATH: string;
	export const _P9K_TTY: string;
	export const NODE: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_exports___node_polyfills_types: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_DATA_HOME: string;
	export const npm_package_devDependencies_dts_buddy: string;
	export const P9K_TTY: string;
	export const SVN_EDITOR: string;
	export const XDG_CONFIG_HOME: string;
	export const npm_package_peerDependencies_svelte: string;
	export const HOMEBREW_PREFIX: string;
	export const KITTY_PID: string;
	export const npm_package_exports___import: string;
	export const EDITOR: string;
	export const npm_package_scripts_test_unit: string;
	export const PMSPEC: string;
	export const npm_package_dependencies_sade: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const MANPATH: string;
	export const NIX_PATH: string;
	export const PNPM_HOME: string;
	export const FORGIT_PAGER: string;
	export const FZF_COMPLETION_TRIGGER: string;
	export const LaunchInstanceID: string;
	export const FZF_COMPLETION_OPTS: string;
	export const __NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
	export const npm_package_exports___node_import: string;
	export const KITTY_PUBLIC_KEY: string;
	export const npm_package_dependencies_cookie: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_package_bugs_url: string;
	export const npm_package_exports___node_types: string;
	export const npm_package_exports___vite_types: string;
	export const COMMAND_MODE: string;
	export const HOMEBREW_BUNDLE_NO_LOCK: string;
	export const HOME: string;
	export const MYPROMPT: string;
	export const ADBLOCK: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const CARGO_HOME: string;
	export const npm_package_version: string;
	export const SECURITYSESSIONID: string;
	export const KEYTIMEOUT: string;
	export const NIX_SSL_CERT_FILE: string;
	export const KITTY_WINDOW_ID: string;
	export const npm_package_files_0: string;
	export const npm_package_scripts_check_all: string;
	export const npm_package_files_1: string;
	export const npm_package_files_2: string;
	export const npm_package_files_3: string;
	export const npm_package_repository_type: string;
	export const npm_package_files_4: string;
	export const npm_package_files_5: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_test_integration: string;
	export const TMPDIR: string;
	export const npm_package_exports___vite_import: string;
	export const npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const npm_package_dependencies_kleur: string;
	export const DOCKER_BUILDKIT: string;
	export const npm_package_devDependencies_rollup: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const npm_package_scripts_format: string;
	export const __ETC_ZSHENV_SOURCED: string;
	export const HOMEBREW_NO_AUTO_UPDATE: string;
	export const _ZO_DATA_DIR: string;
	export const XDG_CACHE_HOME: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const ssh: string;
	export const NNN_OPTS: string;
	export const COMPOSE_DOCKER_CLI_BUILD: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const ZPFX: string;
	export const HOMEBREW_NO_ANALYTICS: string;
	export const npm_package_peerDependencies_vite: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const POETRY_VIRTUALENVS_PATH: string;
	export const ZDOTDIR: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_exports___types: string;
	export const FZF_ALT_C_COMMAND: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_homepage: string;
	export const HOMEBREW_CELLAR: string;
	export const VISUAL: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_package_dependencies_magic_string: string;
	export const GIT_EDITOR: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const PAGER: string;
	export const HOMEBREW_REPOSITORY: string;
	export const _P9K_SSH_TTY: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_devDependencies__types_sade: string;
	export const ATUIN_SESSION: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_package_dependencies_mrmime: string;
	export const npm_package_scripts_lint: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const ATUIN_HISTORY_ID: string;
	export const HOMEBREW_GITHUB_API_TOKEN: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const NIX_REMOTE: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const BATPIPE: string;
	export const KITTY_LISTEN_ON: string;
	export const GO111MODULE: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_generate_version: string;
	export const ATUIN_HISTORY: string;
	export const npm_package_dependencies_esm_env: string;
	export const P9K_SSH: string;
	export const NNN_OPENER: string;
	export const LC_ALL: string;
	export const npm_package_bin_svelte_kit: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_package_dependencies_devalue: string;
	export const npm_config_node_gyp: string;
	export const npm_package_exports___hooks_types: string;
	export const HOMEBREW_CASK_OPTS: string;
	export const NNN_USE_EDITOR: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_license: string;
	export const npm_package_scripts_postinstall: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_config_registry: string;
	export const npm_package_repository_directory: string;
	export const HOMEBREW_BUNDLE_FILE: string;
	export const CVSEDITOR: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const npm_package_types: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_engines_node: string;
	export const _: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		npm_package_scripts_generate_types: string;
		XDG_CONFIG_DIRS: string;
		npm_package_devDependencies__types_node: string;
		LESS: string;
		XPC_FLAGS: string;
		LESSCHARSET: string;
		npm_package_repository_url: string;
		ZSH_CACHE_DIR: string;
		HTTPIE_CONFIG_DIR: string;
		npm_package_exports___hooks_import: string;
		FORGIT_INSTALL_DIR: string;
		FPATH: string;
		_P9K_TTY: string;
		NODE: string;
		npm_package_scripts_test_cross_platform_build: string;
		__CFBundleIdentifier: string;
		npm_package_exports___node_polyfills_types: string;
		SSH_AUTH_SOCK: string;
		XDG_DATA_HOME: string;
		npm_package_devDependencies_dts_buddy: string;
		P9K_TTY: string;
		SVN_EDITOR: string;
		XDG_CONFIG_HOME: string;
		npm_package_peerDependencies_svelte: string;
		HOMEBREW_PREFIX: string;
		KITTY_PID: string;
		npm_package_exports___import: string;
		EDITOR: string;
		npm_package_scripts_test_unit: string;
		PMSPEC: string;
		npm_package_dependencies_sade: string;
		PWD: string;
		NIX_PROFILES: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		MANPATH: string;
		NIX_PATH: string;
		PNPM_HOME: string;
		FORGIT_PAGER: string;
		FZF_COMPLETION_TRIGGER: string;
		LaunchInstanceID: string;
		FZF_COMPLETION_OPTS: string;
		__NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
		npm_package_exports___node_import: string;
		KITTY_PUBLIC_KEY: string;
		npm_package_dependencies_cookie: string;
		FZF_DEFAULT_COMMAND: string;
		npm_package_dependencies_sirv: string;
		npm_package_dependencies_tiny_glob: string;
		npm_package_bugs_url: string;
		npm_package_exports___node_types: string;
		npm_package_exports___vite_types: string;
		COMMAND_MODE: string;
		HOMEBREW_BUNDLE_NO_LOCK: string;
		HOME: string;
		MYPROMPT: string;
		ADBLOCK: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		CARGO_HOME: string;
		npm_package_version: string;
		SECURITYSESSIONID: string;
		KEYTIMEOUT: string;
		NIX_SSL_CERT_FILE: string;
		KITTY_WINDOW_ID: string;
		npm_package_files_0: string;
		npm_package_scripts_check_all: string;
		npm_package_files_1: string;
		npm_package_files_2: string;
		npm_package_files_3: string;
		npm_package_repository_type: string;
		npm_package_files_4: string;
		npm_package_files_5: string;
		npm_package_files_6: string;
		npm_package_scripts_test_integration: string;
		TMPDIR: string;
		npm_package_exports___vite_import: string;
		npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		npm_package_dependencies_kleur: string;
		DOCKER_BUILDKIT: string;
		npm_package_devDependencies_rollup: string;
		INIT_CWD: string;
		npm_package_scripts_test_cross_platform_dev: string;
		npm_package_scripts_format: string;
		__ETC_ZSHENV_SOURCED: string;
		HOMEBREW_NO_AUTO_UPDATE: string;
		_ZO_DATA_DIR: string;
		XDG_CACHE_HOME: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		ssh: string;
		NNN_OPTS: string;
		COMPOSE_DOCKER_CLI_BUILD: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		ZPFX: string;
		HOMEBREW_NO_ANALYTICS: string;
		npm_package_peerDependencies_vite: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		FZF_CTRL_T_COMMAND: string;
		POETRY_VIRTUALENVS_PATH: string;
		ZDOTDIR: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_devDependencies_vitest: string;
		npm_package_exports___types: string;
		FZF_ALT_C_COMMAND: string;
		npm_package_exports___package_json: string;
		npm_package_homepage: string;
		HOMEBREW_CELLAR: string;
		VISUAL: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_exports___node_polyfills_import: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_package_dependencies_magic_string: string;
		GIT_EDITOR: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		PAGER: string;
		HOMEBREW_REPOSITORY: string;
		_P9K_SSH_TTY: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_devDependencies__types_sade: string;
		ATUIN_SESSION: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		npm_package_dependencies_mrmime: string;
		npm_package_scripts_lint: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		ATUIN_HISTORY_ID: string;
		HOMEBREW_GITHUB_API_TOKEN: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		NIX_REMOTE: string;
		npm_package_devDependencies_svelte_preprocess: string;
		BATPIPE: string;
		KITTY_LISTEN_ON: string;
		GO111MODULE: string;
		NODE_PATH: string;
		npm_package_scripts_generate_version: string;
		ATUIN_HISTORY: string;
		npm_package_dependencies_esm_env: string;
		P9K_SSH: string;
		NNN_OPENER: string;
		LC_ALL: string;
		npm_package_bin_svelte_kit: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		BROWSER: string;
		PATH: string;
		npm_package_dependencies_devalue: string;
		npm_config_node_gyp: string;
		npm_package_exports___hooks_types: string;
		HOMEBREW_CASK_OPTS: string;
		NNN_USE_EDITOR: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_license: string;
		npm_package_scripts_postinstall: string;
		FZF_DEFAULT_OPTS: string;
		npm_config_registry: string;
		npm_package_repository_directory: string;
		HOMEBREW_BUNDLE_FILE: string;
		CVSEDITOR: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		npm_package_types: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_engines_node: string;
		_: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
