<script lang="ts">
    import { t } from "../../i18n/store";
    import SearchIcon from "../icons/actions/Search.svelte";
    import Button from "../library/buttons/Button.svelte";

    function openSearch() {
        window.location.href = "/search";
    }

    function goToCreateProject() {
        window.location.href = "/create/project";
    }
</script>

<div class="flex items-center gap-2">
    <Button
        size="md"
        kind="ghost"
        onclick={openSearch}
        aria-label={$t("common.header.search")}
        class="size-10 border-none p-1 inset-ring-0"
    >
        <SearchIcon width="32" height="32" class="text-content" />
    </Button>
    <Button size="sm" kind="primary" onclick={goToCreateProject} class="h-10 rounded-lg">
        {$t("common.header.createProject")}
    </Button>
</div>
