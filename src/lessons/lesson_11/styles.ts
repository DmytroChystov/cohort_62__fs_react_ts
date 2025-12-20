import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 1200px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ErrorText = styled(Text)`
  color: #e74c3c;
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  margin-top: 30px;
`;

export const UniversitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const UniversityCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  width: 350px;
  border: 1px solid #e9ecef;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const UniversityName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 15px 0;
`;

export const UniversityDetail = styled.p`
  font-size: 14px;
  color: #555;
  margin: 8px 0;
`;
