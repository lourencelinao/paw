<template>
  <div class="w-4/5 mx-auto">
    <div class="grid grid-cols-1 my-12">
      <div class="flex">
        <div class="w-1/5 mx-auto">
          <img
            :src="getImg(dog[0].dog_id)"
            alt=""
            class="rounded-full shadow-md"
          />
        </div>
        <div class="w-2/3 bg-white rounded-md shadow-md px-12 py-5">
          <div class="space-y-2">
            <div class="flex justify-between">
              <div class="text-bluegray-700 text-4xl">
                {{ dog[0].dog_name }}
              </div>
              <a
                :href="`https://airtable.com/shrDKDQ67PU4xk0dw?prefill_Dog_name=${dog[0].dog_name}`"
                target="_blank"
                class="btn-primary px-4 py-2"
                >Apply for adoption</a
              >
            </div>
            <div class="text-bluegray-500 text-xl">{{ dog[0].breed }}</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              aliquid nam quasi suscipit! Praesentium architecto eius fugit
              sequi, ipsam harum? Cumque dignissimos dolore suscipit enim quos
              saepe totam similique aliquid.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DogService from "../../Services/DogService";
import DogImageService from "../../Services/DogImageServices";
import moment from "moment";
export default {
  data() {
    return {
      dog: "",
    };
  },
  methods: {
    async getDog() {
      try {
        this.dog = await DogService.getDog(this.$route.params.id);
        console.log(this.dog);
      } catch (err) {
        console.error(err.message);
      }
    },
    moment(date) {
      return moment(date).format("L");
    },
    getAge(date) {
      var a = moment(moment(), "YYYY-MM-DD");
      var b = moment(date, "YYYY-MM-DD");

      let years = a.diff(b, "years");
      if (years === 0) {
        years = a.diff(b, "months") + " months old";
      } else {
        years = a.diff(b, "years") + " years old";
      }

      return years;
    },
    async getImages() {
      try {
        this.images = await DogImageService.getAll();
        console.log(this.images);
      } catch (err) {
        console.error(err.message);
      }
    },
    getImg(id) {
      let img;
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i].dog_id === id) {
          img = this.images[i];
          console.log(img);
          return require(`../../../../img/${img.image}`);
          break;
        }
      }
      return "https://via.placeholder.com/300";
    },
  },
  created() {
	this.getDog();
	this.getImages()
  },
};
</script>

<style>
</style>