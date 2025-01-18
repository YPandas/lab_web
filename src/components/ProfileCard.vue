<template>
  <div class="profile-card">
    <img :src="image" :alt="`${name}`" class="profile-card__image" />
    <div class="profile-card__content">
      <h3 class="profile-card__name">{{ name }}</h3>
      <p class="profile-card__position">{{ position }}</p>
      <p class="profile-card__department">{{ department }}</p>
      <div class="profile-card__icons">
        <a v-if="website" :href="website" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-globe"></i>
        </a>
        <a v-if="email" :href="`mailto:${email}`">
          <i class="fas fa-envelope"></i>
        </a>
        <a v-if="twitter" :href="twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
        <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
    linkedin: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.profile-card {
  width: 20vh;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  font-family: Arial, sans-serif;
}

.profile-card__image {
  width: 100%;
  height: auto;
}

.profile-card__content {
  padding: 16px;
}

.profile-card__name {
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0;
}

.profile-card__position,
.profile-card__department {
  font-size: 14px;
  margin: 7% 0;
  color: #555;
}

.profile-card__icons {
  margin-top: 12px;
}

.profile-card__icons a {
  margin: 0 8px;
  color: #0077b5;
  text-decoration: none;
  font-size: 18px;
}

.profile-card__icons a:hover {
  color: #005582;
}
</style>
