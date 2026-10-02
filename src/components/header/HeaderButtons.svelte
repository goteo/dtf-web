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

<div class="flex gap-2">
    <Button size="md" kind="ghost" onclick={openSearch} class="border-none inset-0 inset-ring-0">
        <SearchIcon width="32" height="32" class="text-content" />
    </Button>
    <Button size="md" kind="primary" onclick={goToCreateProject}>
        {$t("common.header.createProject")}
    </Button>
</div>
