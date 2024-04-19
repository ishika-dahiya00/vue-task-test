<template>
  <div class="container">
    <div class="row justify-content-center">
      <form class="col-md-6" @submit.prevent="submitForm">
        <div
          class="form-group mt-7 mb-2"
          v-for="form in blocks"
          :key="form.token"
        >
          <div class="col-12">
            <label class="control-label">{{ form.props.title }}</label>
            <br />
            <input
              v-if="form.token !== 'IS_PERSON_MINOR'"
              v-model="form.value"
              :type="form.type"
              :placeholder="form.props.placeholder"
              :required="form.props.required"
              :value="form.placeholder"
              :checked="form.default"
              @input="updateForm(form.token, $event.target.value)"
              :disabled="form.disabled"
              class="form-control form-check-input"
            />
            <input
              v-else
              v-model="form.value"
              :type="form.type"
              :placeholder="form.props.placeholder"
              :required="form.props.required"
              :value="form.placeholder"
              :checked="form.default"
              @change="updateForm(form.token, $event.target.checked)"
              class="form-check-input"
              style="border: 2px solid gray"
            />
          </div>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <SubmittedData :submittedData="submissions" />
  </div>
</template>

<script>
import SubmittedData from "@/components/SubmittedData.vue";

export default {
  name: "FormSubmit",
  components: { SubmittedData },
  data() {
    return {
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          value: "",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Smith",
          },
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          value: false,
          props: {
            title: "Is the current person minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          value: "",
          props: {
            title: "Enter your DOB",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000",
          },
          disabled: true,
        },
      ],
      submissions: [],
    };
  },
  methods: {
    updateForm(input, value) {
      const formField = this.blocks.find((block) => block.token === input);
      formField.value = value;

      if (input === "IS_PERSON_MINOR") {
        this.blocks.find((block) => block.token === "PERSON_DOB").disabled =
          !value;
      }

      this.saveStorage();
    },
    saveStorage() {
      const formData = {};
      this.blocks.forEach((block) => {
        formData[block.token] = block.value;
      });
      localStorage.setItem("form", JSON.stringify(formData));
    },
    submitForm() {
      if (
        this.blocks.some(
          (block) =>
            block.token === "IS_PERSON_MINOR" &&
            block.value &&
            !this.blocks.find((block) => block.token === "PERSON_DOB").value
        )
      ) {
        return;
      }

      const submission = {};
      this.blocks.forEach((block) => {
        submission[block.token] = block.value;
      });

      const existingSubmissions =
        JSON.parse(localStorage.getItem("submissions")) || [];
      existingSubmissions.push(submission);
      localStorage.setItem("submissions", JSON.stringify(existingSubmissions));
      this.submissions = existingSubmissions;

      this.blocks.forEach((block) => {
        if (block.token === "PERSON_DOB") {
          block.disabled = true;
          block.value = "";
        } else {
          block.value = "";
        }
      });
      this.saveStorage();
    },
    loadSubmissions() {
      const storedSubmissions =
        JSON.parse(localStorage.getItem("submissions")) || [];
      this.submissions = storedSubmissions;
    },
  },
  created() {
    this.loadSubmissions();
    const storedFormData = JSON.parse(localStorage.getItem("form"));
    if (storedFormData) {
      this.blocks.forEach((block) => {
        if (storedFormData.hasOwnProperty.call(storedFormData, block.token)) {
          block.value = storedFormData[block.token];
        }
      });
    }

    this.blocks.find((block) => block.token === "PERSON_DOB").disabled =
      !this.blocks.find((block) => block.token === "IS_PERSON_MINOR").value;
  },
};
</script>

<style scoped>
input[type="text"],
input[type="date"] {
  border: 2px solid black;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
