export async function get({ params, request }) {
	return {
	  body: JSON.stringify({
		 success: true,
	  }),
	};
 }