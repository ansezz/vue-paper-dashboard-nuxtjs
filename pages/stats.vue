<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <user-card>

        </user-card>
        <members-card>

        </members-card>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-profile-form>

        </edit-profile-form>
      </div>
    </div>
</template>
<script>
import EditProfileForm from "~/components/UserProfile/EditProfileForm.vue";
import UserCard from "~/components/UserProfile/UserCard.vue";
import MembersCard from "~/components/UserProfile/MembersCard.vue";
export default {
  components: {
    EditProfileForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
