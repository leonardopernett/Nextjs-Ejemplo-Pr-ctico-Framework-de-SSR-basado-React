import React from "react";
import { useRouter } from "next/router";
import Container from "../../components/Container";
export default function UserProfile({ user }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-header text-center">
            <img
              src={user.avatar}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "50%" }}
            />
            </div>
            <div className="card-body text-center">
            <div>
              <p>
                {user.first_name} - {user.last_name}
              </p>
              <p>{user.email}</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

UserProfile.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users/" + ctx.query.id);//id de la ruta
  const response = await res.json();
  return { user: response.data };
};
