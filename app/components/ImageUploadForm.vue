<template>
  <div>
    <h3 class="text-lg font-semibold mb-4 text-blue-700">Upload an image list of ingredients</h3>
    
    <form class="max-w-md mx-auto p-4 border rounded shadow-sm bg-white space-y-4 self-start" @submit.prevent="handleSubmit">
      <label
        for="image-upload"
        class="flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded p-6 hover:border-blue-500 hover:bg-blue-50 transition"
      >
        <Icon name="uil:cloud-upload" class="w-10 h-10 text-blue-500 mb-2" />
        <span class="text-gray-700">Click or drag an image to upload</span>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          class="hidden"
          @change="onFileChange"
        />
      </label>

      <div v-if="preview" class="text-center">
        <div class="relative inline-block">
          <img
            :src="preview"
            alt="Preview"
            class="mx-auto max-h-48 rounded shadow"
          />
          <button
            type="button"
            class="absolute top-2 right-2 bg-white/80 backdrop-blur p-1 rounded-full text-red-500 hover:text-red-700 transition"
            @click="file = null"
          >
            <Icon name="uil:trash-alt" class="w-5 h-5" />
          </button>
        </div>
        <p class="mt-2 text-gray-600 text-sm">{{ file?.name }}</p>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        :disabled="!file"
      >
        Upload
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['submit']);

const file = ref<File | null>(null);
const preview = ref<string | null>(null);

const handleSubmit = () => {
  emit('submit', preview.value);
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
  }
};

watch(file, (newFile) => {
  if (!newFile) {
    preview.value = null;
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    preview.value = e.target?.result as string;
  };
  reader.readAsDataURL(newFile);
});
</script>