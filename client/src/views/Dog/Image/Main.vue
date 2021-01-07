<template>
  <div>
    <div>
      <div class="flex justify-end">
        <form @submit.prevent="postDogImage" class="w-full">
          <div class="mt-4">
            <div class="text-bluegray-700">
              <input
                type="file"
                hidden
                name="dog_image"
                ref="file"
                id="file"
                @change="handleFileUpload"
              />
              <button
                @click="chooseFiles()"
                class="w-full flex justify-center items-center px-4 py-4 rounded border-2 border-bluegray-700 border-dashed"
              >
                <upload-icon size="1.25x" class="mr-2"></upload-icon>
                Images
              </button>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="btn-primary px-4 py-2 mt-3">Upload</button>
          </div>
        </form>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-3">
        <div class="max-w-sm" v-for="(img, indx) in images" :key="indx">
          <img
            :src="getImg(img.image)"
            :alt="img.image"
            @dblclick="deleteImg(img.dog_image_id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UploadIcon, Tren } from "vue-feather-icons";
import DogImageService from "../../../Services/DogImageServices";
import axios from "axios";
export default {
  components: {
    UploadIcon,
  },
  data() {
    return {
      file: "",
      images: [],
    };
  },
  methods: {
    chooseFiles() {
      document.getElementById("file").click();
    },
    async postDogImage() {
      try {
        if (this.file) {
          // let dogImage = {
          //   dog_id: this.$route.params.id,
          //   image: this.file,
          // };
          // console.log(dogImage);
          // await DogImageService.postDogImage(dogImage);
          let formData = new FormData();
          formData.append("image", this.file);
          // await DogImageService.postDogImage(formData)
          await axios.post(
            `http://localhost:3000/api/image/${this.$route.params.id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }
      } catch (err) {
        console.error(err.message);
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    async getDogImages() {
      try {
        this.images = await DogImageService.getDogImages(this.$route.params.id);
        console.log(this.images);
      } catch (err) {
        console.error(err.message);
      }
    },
    getImg(img) {
      return require(`../../../../../img/${img}`);
    },
    async deleteImg(id) {
      try {
        await DogImageService.deleteDogImage(id)
        this.images = await DogImageService.getDogImages(this.$route.params.id);
        console.log(this.images);
      } catch (err) {
        console.error(err.message);
      }
    },
  },
  created() {
    this.getDogImages();
  },
};
</script>

<style>
</style>