<template>
  <div>
    <div class="grid grid-cols-1 my-12">
      <div class="flex">
        <div class="w-1/5 mx-auto">
          <img
            :src="getImg()"
            alt=""
            class="rounded-full shadow-md"
          />
        </div>
        <div class="w-2/3 bg-white rounded-md shadow-md">
          <div class="grid grid-cols-2 gap-4 p-5 text-bluegray-700">
            <div>
              <div class="text-sm text-bluegray-500">Name</div>
              <div class="text-2xl">{{ dog[0].dog_name }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">ID</div>
              <div class="text-2xl">{{ dog[0].dog_id }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Breed</div>
              <div class="text-2xl">{{ dog[0].breed }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Sex</div>
              <div class="text-2xl">{{ dog[0].sex }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Date of Birth</div>
              <div class="text-2xl">{{ moment(dog[0].birthday) }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Age</div>
              <div class="text-2xl">{{ getAge(dog[0].birthday) }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Status</div>
              <div class="text-2xl">{{ dog[0].status }}</div>
            </div>

            <div>
              <div class="text-sm text-bluegray-500">Foster Parent</div>
              <div class="text-2xl">
                {{ outtake[0].firstname + " " + outtake[0].lastname }}
              </div>
            </div>
          </div>

          <div class="px-5">
            <hr class="border-bluegray-200" />
          </div>

          <div>
            <div class="p-5 text-bluegray-700">
              <div class="text-2xl">Additional Info</div>

              <div class="flex justify-between mt-3">
                <div>
                  <div class="text-sm text-bluegray-500">Weight</div>
                  <div class="text-2xl">{{ dog[0].weight }} kgs</div>
                </div>
                <div>
                  <div class="text-sm text-bluegray-500">Color</div>
                  <div class="text-2xl">{{ dog[0].color }}</div>
                </div>
                <div>
                  <div class="text-sm text-bluegray-500">Marks</div>
                  <div class="text-2xl">{{ dog[0].marks }}</div>
                </div>
                <div>
                  <div class="text-sm text-bluegray-500">Aggressive?</div>
                  <div class="text-2xl">{{ dog[0].aggressive }}</div>
                </div>
                <div>
                  <div class="text-sm text-bluegray-500">Trained?</div>
                  <div class="text-2xl">{{ dog[0].trained }}</div>
                </div>
              </div>

              <div class="text-sm text-bluegray-500 mt-3">Description</div>
              <p class="text-xl">
                {{ dog[0].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DogService from "../../../Services/DogService";
import OuttakeService from "../../../Services/OuttakeService";
import DogImageService from "../../../Services/DogImageServices";
import moment from "moment";
export default {
  data() {
    return {
      dog: "",
      outtake: [
        {
          firstname: "N/A",
          lastname: " ",
        },
      ],
      images: [],
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
    async getOuttake() {
      try {
        this.outtake = await OuttakeService.getOuttakes(this.$route.params.id);
        console.log(this.outtake);
      } catch (err) {
        console.error(err.message);
      }
    },
    async getImages() {
      try {
        this.images = await DogImageService.getDogImages(this.$route.params.id);
        console.log(this.images);
      } catch (err) {
        console.error(err.message);
      }
    },
    getImg() {
      //   let img;

      //   for (let i = 0; i < this.images.length; i++) {
      //     if (this.images[i].dog_id === id) {
      //       img = this.images[i];
      //       console.log(img);
      //       return require(`../../../../../img/${img.image}`);
      //       break;
      //     }
      //   }
      //   return "https://via.placeholder.com/300";
		console.log(this.images.length)
      if (this.images.length > 0) {
        return require(`../../../../../img/${this.images[0].image}`);
	  } 
	  return "https://via.placeholder.com/300";
    },
  },
  created() {
    this.getDog();
    this.getOuttake();
    this.getImages();
  },
};
</script>

<style>
</style>